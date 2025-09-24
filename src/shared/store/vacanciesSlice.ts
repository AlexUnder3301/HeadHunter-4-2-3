import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ky from "ky";
import type { ParamsType, VacancyType, ResponseType } from "../types";

interface StateType {
  params: ParamsType;
  vacancies: VacancyType[];
  totalPages: number;
  page: number;
  isLoading: boolean;
  error: string | null;
  skills: string[];
  search: string;
}

const initialState: StateType = {
  params: {
    industry: 7,
    professional_role: 96,
    per_page: 10,
    area: 113,
    text: "Frontend OR TypeScript OR Redux OR React",
    page: 0,
  },
  vacancies: [],
  totalPages: 1,
  page: 0,
  isLoading: false,
  error: null,
  skills: ["TypeScript", "React", "Redux"],
  search: "Frontend",
};

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetchVacancies",
  async function (searchParams: ParamsType, { rejectWithValue }) {
    try {
      const params = new URLSearchParams();
      Object.entries(searchParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });

      const response: ResponseType = await ky
        .get(`https://api.hh.ru/vacancies?${params.toString()}`, {
          headers: {
            "User-Agent": "MyApp/1.0 (contact@example.com)",
          },
        })
        .json();

      const vacancies: VacancyType[] = response.items.map((item) => {
        return {
          id: item.id,
          employerName: item.employer?.name ?? "Не указано",
          name: item.name,
          experience: item.experience?.id ?? "Не указано",
          salary: {
            from: item.salary?.from ?? null,
            to: item.salary?.to ?? null,
          },
          workFormat: item.work_format?.[0]?.id ?? "Не указано",
          area: item.area?.name ?? "Не указан",
          requirement: item.snippet?.requirement ?? "Не указано",
          responsibility: item.snippet?.responsibility ?? "Не указано",
        };
      });

      const data = {
        page: response.page,
        pages: response.pages,
        vacancies: vacancies,
      };

      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setParams(state, action) {
      const newParams = {
        ...state.params,
        ...action.payload,
      };

      state.params = newParams;
    },
    configureTextParam(state) {
      if (state.skills.length > 0) {
        const skillSetString = state.skills.join(" OR ");
        const newSearchField = `${state.search} AND (${skillSetString})`;
        state.params.text = newSearchField;
      } else {
        state.params.text = state.search;
      }
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vacancies = action.payload.vacancies;
        state.totalPages = action.payload.pages;
        state.page = action.payload.page;
        state.params.page = action.payload.page;
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setParams, configureTextParam, setSkills, setSearch } =
  vacanciesSlice.actions;
export default vacanciesSlice.reducer;
