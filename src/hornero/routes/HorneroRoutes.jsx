import { Navigate, Route, Routes } from "react-router-dom";
import { HorneroLayout } from "../layout/HorneroLayout";
import { HorneroPage } from "../pages/HorneroPage";
import { ProfileView } from "../pages/account/ProfileView";
import { EditProfileView } from "../pages/account/EditProfileView";

export const HorneroRoutes = () => {
  return (
    <HorneroLayout>
      <Routes>
        <Route path="/" element={<HorneroPage />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/editProfile" element={<EditProfileView />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HorneroLayout>
  );
};
