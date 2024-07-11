import Styles from './Wrapper.module.css'

function Wrapper(props){
    return <div className={Styles.Wrapper}>
        {props.children}
    </div>


}
export default Wrapper;