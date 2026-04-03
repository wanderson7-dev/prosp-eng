import Advertorial from "@/components/pages/black/new/advertorial";
import BlackAcutis from "@/components/pages/black/acutis/advertorial";
import { cookies } from "next/headers";

export default async function Page() {
  const cks = await cookies();
  const validUser = cks.get("xcat_valid")?.value;

  if (validUser === "acutis") {
    return <BlackAcutis />;
  }

  return <Advertorial />;
}