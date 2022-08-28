import { FC } from "react";

interface ProtectedProps {}

const Protected: FC<ProtectedProps> = ({}) => {
  return (
    <main>
      <h1>Protected</h1>
    </main>
  );
};

export default Protected;
