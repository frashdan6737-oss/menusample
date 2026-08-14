import Menu from "@/components/Menu";
import { menuData } from "@/data/menu";

export default function Page() {
  return <Menu categories={menuData} />;
}
