import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ErrorBoundary Component', () => {
    // Smoke test
    test('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ErrorBoundary />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test
    test.skip('Renders Default State',
    () => {
        const wrapper = shallow(<ErrorBoundary />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
