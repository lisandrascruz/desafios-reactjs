import Profile from "../Profile/Profile";

interface FamilyProps {
  members: Array<{
    name: string;
    age: number;
    preferredColor: "azul" | "laranja" | "verde" | "vermelho";
  }>;
}

const Family = ({ members }: FamilyProps) => {
  return members.map(({ name, age, preferredColor }, idx) => (
    <Profile key={idx} name={name} age={age} preferredColor={preferredColor} />
  ));
};

export default Family;
