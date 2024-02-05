import ReactDOM from 'react-dom/client'
// import {HooksApp} from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
    <FocusScreen />
);

{/* <HooksApp /> */}
{/* <CounterApp /> */}
{/* <CounterWithCustomHook /> */}
{/* <SimpleForm /> */}
{/* <FormWithCustomHook /> */}
{/* <MultipleCustomHooks /> */}