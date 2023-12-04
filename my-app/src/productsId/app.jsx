import {BrowserRouter, Router, Route} from `react-router-dom`;
import { ListProducts} from './pages/listProducts';
import {ProductId} from './pages/productId';
function App() {
return (
    <>
        <BrowserRouter>
            <Routes>
             <Route index element={<ListPRoducts />} />
             <Route path='/productId' element={<ProductId />} />
        </Routes>
    </BrowserRouter>
</>
)

}
export default App