"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Building2Icon, BuildingIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import GoToAdminButton from "../admin/go-to-admin-button";

export default function CustomUserButton() {
  return (
    <UserButton>
      <UserButton.UserProfilePage
        label="Organizations"
        labelIcon={<BuildingIcon className="size-4" />}
        url="/organizations"
      >
        <div className="p-4">
          <h2>Manage Organizations</h2>
          <OrganizationSwitcher
            hidePersonal={true}
            afterCreateOrganizationUrl={"/submit"}
            afterSelectPersonalUrl={"/submit"}
          />
        </div>
      </UserButton.UserProfilePage>
      <UserButton.UserProfilePage
        label="Admin"
        labelIcon={<Building2Icon className="size-4" />}
        url="admin"
      >
        <div className="p-4">
          <h2>Admin Panel</h2>
          <GoToAdminButton />
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}