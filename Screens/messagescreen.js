import { useRoute } from "@react-navigation/native";
import Header from "../Components/header";
const Messagescreen=()=>{
    const {
        params:{
            user
        }
    }=useRoute();
    console.log(user);
    return(
        <Header title={"Message"} callenabled={true}/>
    );
}

export default Messagescreen;