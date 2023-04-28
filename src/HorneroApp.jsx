import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const HorneroApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
