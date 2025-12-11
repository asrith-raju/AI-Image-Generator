import axios from "axios";
import { createContext,use,useEffect,useState} from "react";
import {toast} from 'react-toastify'



export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setuser] = useState(null)
    const [showLogin, setshowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)
    


    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const loadCreditdata = async()=>{
        try {
            const {data}= await axios.get(backendUrl+'/api/user/credits', {
                headers:{ token
                }
            })
            console.log(data);
            
            if(data.success){
                setCredit(data.credits)
                setuser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const generateImage = async (prompt)=>{
        try {
           const {data} = await axios.post(backendUrl+'/api/image/generate-image',{prompt
            },{
                headers:{ token
                }
            })
            if(data.success){
               loadCreditdata()
               return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditdata()
                if(data.creditBalance === 0){  
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        setToken('')
        setuser(null)
    }

    useEffect(() => {
        if(token){
            loadCreditdata()
        }
    },[token])
    
    const value={
        user,setuser,showLogin,setshowLogin, backendUrl,token,setToken,credit,setCredit,loadCreditdata,logout,generateImage
    }

    return(
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider