import {foo,bar} from './math';
import data from '../test/data';
import '../css/test.css';

document.write("entry.js is working" + "<br>");
document.write(foo(3) + "<br>");
document.write(bar(3) + "<br>");
document.write(data.name);