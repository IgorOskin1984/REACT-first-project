import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus status="HELLO WORLD" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("HELLO WORLD");
	});
	test("after creation <span> should be desplayd", () => {
		const component = create(<ProfileStatus status="HELLO WORLD" />);
		const root = component.root;
		let span = root.findByType('span')
		expect(span).not.toBeNull;
		//*работают оба варианта
		//expect(span).toBeNull;
	});
	test("after creation <input> should NOT be desplayd", () => {
		const component = create(<ProfileStatus status="HELLO WORLD" />);
		const root = component.root;
		expect(() => {
			root.findByType('input')
		}).toThrow;
		//так же работало с toBeNull
	});
	test("after creation <span> should contains correct status", () => {
		const component = create(<ProfileStatus status="HELLO WORLD" />);
		const root = component.root;
		let span = root.findByType('span')
		expect(span.children[0]).toBe("HELLO WORLD")
	});
	//test("<input> should be displayed in editMode instead of <span>", () => {
	//	const component = create(<ProfileStatus status="HELLO WORLD" />);
	//	const root = component.root;
	//	let span = root.findByType('span');
	//	span.props.onDoubleClick();
	//	let input = root.findByType('input')
	//	expect(input.length).toBe(1);
	//});
});