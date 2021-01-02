import { useSelector } from 'react-redux';

const Alert = () => {
    const {alert} = useSelector(state => state.alertReducer)
  
    if(alert.length > 0){
      return <div >
            {alert.map(el =>(
                <div key={el.id} className="alert">
                  {el.msg}
                </div>
              ))}
            </div>
    }else{
      return null
    }
  };
  

export default Alert
