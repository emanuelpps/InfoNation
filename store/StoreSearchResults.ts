import { create } from "zustand";

interface StoreSearchResults {
  searchResults: CountryData[];
  setSearchResults: (searchResults: CountryData[]) => void;
}

export type CountryData = {
  name: {
    common: string;
  };
  capital: string;
  continent: string;
  independent: boolean;
  unMember: boolean;
  population: number;
  flags: {
    svg: string;
  };
};
export const useStoreSearchResults = create<StoreSearchResults>((set) => ({
  searchResults: [],
  setSearchResults: (searchResults: CountryData[]) => set({ searchResults }),
}));
