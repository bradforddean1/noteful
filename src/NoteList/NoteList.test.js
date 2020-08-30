import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from './NoteList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NoteList Component', () => {
    // Smoke test
    test('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <NoteList />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test
    test.skip('Renders Default State',
    () => {
        const wrapper = shallow(<NoteList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
