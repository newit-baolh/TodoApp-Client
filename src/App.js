import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import ModalForm from "./components/ModalForm/ModalForm";

function App() {
    return (
        <div className="container mx-auto">
            <Header/>
            <div className="grid grid-cols-12 gap-x-10 m-4">
                <ModalForm/>
                <Content/>
            </div>
        </div>

    );
}

export default App;
