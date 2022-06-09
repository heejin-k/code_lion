import './header.css'
import Menu from '../menu/Menu'
export default function Header({ id, nickname }) {
    return (
        <div className='test'>
            header , {nickname}({id})님 반갑습니다.
            <Menu />
        </div>
    )
}