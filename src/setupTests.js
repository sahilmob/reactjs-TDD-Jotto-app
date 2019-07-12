import Enzyme, { shallow } from "enzyme"

import EnzymeAdapter from "enzyme-adapter-react-16";

const adapter = new EnzymeAdapter()

Enzyme.configure({ adapter })
global.Enzyme = Enzyme
global.adapter = adapter
global.shallow = shallow

