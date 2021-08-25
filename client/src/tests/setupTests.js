const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const $ = require('jquery');
global.$ = global.jQuery = $;

Enzyme.configure({ adapter: new Adapter() });
