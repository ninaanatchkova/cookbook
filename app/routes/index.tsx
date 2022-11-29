import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="site-content">
      <h1 className="text-title">Welcome to Cookbook!</h1>
    </main>
  );
}
