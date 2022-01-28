/* eslint-disable @typescript-eslint/no-namespace */
export namespace VueEvent {
	// es6 eslint제거
	export interface Input<T extends EventTarget> extends InputEvent {
		target: T;
	}
	export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
		target: T;
	}
}

// VueEvent.Input

/**
 * [타입의 위계]
 * Event -> target 속성 정의되어 있음. target 속성타입과 호환되어야함
 * UIEvent
 * InputEvent
 */
