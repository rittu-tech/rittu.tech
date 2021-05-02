import Footer from '../footer';
import Header from '../header';

function Layout ({children}){
    return (
        <div className="main">
            <Header/>
            <di className="min-h-60vh">
            {children}
            </di>
            <Footer/>       
        </div>
    )
}

export default Layout