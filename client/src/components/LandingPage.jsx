import { Link } from 'react-router-dom';
import style from '../styles/LandingPage.module.css'
import Image from '../image'

const LandingPage = () =>
{
	return (
		<div className={style.contain}>
			<Link to='/home' >
				<img src={Image.hueso} className={style.btn} alt='hueso' />
			</Link>

		</div>
	)
}
export default LandingPage