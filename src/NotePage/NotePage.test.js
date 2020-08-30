import React from 'react';
import ReactDOM from 'react-dom';
import NotePage from './NotePage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NotePage Component', () => {
    // Smoke test
    test('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <NotePage />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test
    test.skip('Renders Default State',
    () => {
        const wrapper = shallow(<NotePage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
