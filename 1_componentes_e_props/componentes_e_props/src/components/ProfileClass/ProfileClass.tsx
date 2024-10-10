import { Component } from "react";

interface ProfileClassProps {
  name: string;
  age: number;
  preferredColor: "azul" | "laranja" | "verde" | "vermelho";
}

class ProfileClass extends Component<ProfileClassProps> {
  render() {
    const { name, age, preferredColor } = this.props;

    return (
      <p>
        {name} tem {age} e sua cor preferida é {preferredColor}.
      </p>
    );
  }
}

export default ProfileClass;
