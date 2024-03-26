const initState: InitialStateType = {
  themeId: 1,
};

export const themeReducer = (
  state: InitialStateType = initState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET_THEME_ID":
      return { themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number) =>
  ({ type: "SET_THEME_ID", id } as const); // fix any


export type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>;

type ActionsType = ChangeThemeIdActionType;

export type InitialStateType = {
  themeId: number;
};
