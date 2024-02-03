import type { TierType } from "./types";

export function getCurrentSeason(): string {
  const currentMonth = new Date().getMonth() + 1;
  if (1 <= currentMonth && currentMonth <= 3) {
    return "Winter";
  } else if (4 <= currentMonth && currentMonth <= 6) {
    return "Spring";
  } else if (7 <= currentMonth && currentMonth <= 9) {
    return "Summer";
  } else if (10 <= currentMonth && currentMonth <= 12) {
    return "Fall";
  } else {
    console.error(`Current month out of range: ${currentMonth}`);
    throw new Error("Current month out of range");
  }
}

const beginningYear: number = 2010;
export function getSelectableYears(): string[] {
  const selectableYears: string[] = [];
  for (let i = 0; i <= new Date().getFullYear() - beginningYear + 1; i++) {
    selectableYears.push((beginningYear + i).toString());
  }
  return selectableYears;
}

export const TierTypes: TierType[] = [
  {
    name: "Want to watch",
    tierNames: ["Must watch", "Most likely watch", "3 Episodes", "1 Episode", "No Chance"]
  },
  {
    name: "S,A,B,C,D",
    tierNames: ["S", "A", "B", "C", "D"]
  },
  {
    name: "Percent",
    tierNames: ["100%", "80%", "60%", "40%", "20%", "0%"]
  }
]
