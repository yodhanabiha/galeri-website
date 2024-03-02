import type { ReduxState } from "@/lib/redux";

export const showSidebar = (state: ReduxState) => state.layout.showSidebar;
