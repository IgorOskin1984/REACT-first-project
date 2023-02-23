import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "../components/Main/Profile/ProfileInfo/ProfileStatus";

describe("ProfileStatus component", () => {

	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus status="HELLO WORLD" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("HELLO WORLD");
	});
	test("editMode: false from props should be in the state", () => {
		const component = create(<ProfileStatus status={'hello world'} />)
		const instance = component.getInstance();
		expect(instance.state.editMode).toBe(false)
	})
	test("after creation <span> should be desplayd", () => {
		const component = create(<ProfileStatus status={'hello world'} />);
		//const root = component.root;
		const instance = component.root;
		let span = instance.findAllByType('span')
		expect(span.length).toBe(1);
	});
	test("after creation <span> should contains correct status", () => {
		const component = create(<ProfileStatus status={'hello world'} />);
		const instanceOrRoot = component.root;
		const span = instanceOrRoot.findByType('span');
		expect(span.children[0]).toBe('hello world')
	})
	test("<input> should Not be desplayd yet", () => {
		const component = create(<ProfileStatus status={'hello world'} />);
		const root = component.root;
		let input = root.findAllByType('input')
		expect(input.length).toBe(0);
	});
	test("after onDoubleClick <span> editMode should be true ", () => {
		const component = create(<ProfileStatus status={'hello world'} />);
		const instance = component.getInstance();
		const instanceOrRoot = component.root;
		const span = instanceOrRoot.findByType('span');
		span.props.onDoubleClick();
		expect(instance.state.editMode).toBe(true)
	})
	test("after <span> onDoubleClick <input> should be desplayd instead of <span>", () => {
		const component = create(<ProfileStatus status={'hello world'} />);
		const instanceOrRoot = component.root;
		let span = instanceOrRoot.findByType('span')
		span.props.onDoubleClick();
		span = instanceOrRoot.findAllByType('span')
		expect(span.length).toBe(0);
		let input = instanceOrRoot.findAllByType('input')
		expect(input.length).toBe(1);
		expect(input[0].props.value).toBe('hello world')
	});
	test('callback should be called', () => {
		const mockCallback = jest.fn()
		const component = create(<ProfileStatus status={'hello world'} updateUserStatusTC={mockCallback} />)
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1)
	})
});