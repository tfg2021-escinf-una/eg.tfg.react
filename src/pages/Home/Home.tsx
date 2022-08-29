import { Button } from "@mui/material";
import { useState } from "react";
import { withAuthentication } from "../../components";
import { StyledHome } from "./Home.styles";

const Home = () => {
  const [ roles, setRoles ] = useState<any>([])
  const onClickRoleButton = async() => {
    
  }

  return (
    <StyledHome>
      <Button variant="outlined"
              onClick={onClickRoleButton}>
        CLICK ME!
      </Button>
      <div>
        {
          roles.map((it : any, index : number) => (
            <p key={index}>{it.name}</p>
          ))
        }
      </div>
    </StyledHome>
  );
}

export const AuthHome = withAuthentication(Home)
