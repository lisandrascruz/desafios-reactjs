interface ProfileProps {
  name: string;
  age: number;
  preferredColor: "azul" | "laranja" | "verde" | "vermelho";
}

const Profile = ({ name, age, preferredColor }: ProfileProps) => (
  <p>
    {name} tem {age} e sua cor preferida é {preferredColor}.
  </p>
);

export default Profile;
