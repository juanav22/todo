import headerImg from '../assets/img/todo-bg.jpg'

import '../styles/styles.css';

function Header () {
    return (
        <div className="header-container">
            <img src={headerImg} alt="todo-bg" />
            <span className="header-todo-label">To-do List</span>
        </div>
    );
}

export default Header;
