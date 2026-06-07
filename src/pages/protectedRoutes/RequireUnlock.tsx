import { Navigate, Outlet } from "react-router";
import {
  usePortfolioStore,
  type UnlockLevel,
} from "../../store/portfolioStore";

type Props = {
  requiredLevel: UnlockLevel;
};

function RequireUnlock({ requiredLevel }: Props) {
  const level = usePortfolioStore((state) => state.level);

  if (level < requiredLevel) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RequireUnlock;
