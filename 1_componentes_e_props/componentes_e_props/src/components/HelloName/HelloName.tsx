interface HelloNameProps {
  name: string;
}

const HelloName = ({ name }: HelloNameProps) => (
  <p>Olá {name}, seja bem vinda! </p>
);

export default HelloName;
