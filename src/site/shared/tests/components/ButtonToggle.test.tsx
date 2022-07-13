import "@testing-library/jest-dom";
import {render}  from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {ButtonToggle} from "shared/components/ButtonToggle";

import {GetToggles} from "../helpers/GetToggles";


describe("Button Toggle", () => {
    test("Button on", () => {
        render(<ButtonToggle text="test" isOn />);
        const [buttonOn, buttonOff] = GetToggles("test");
        expect(buttonOn).toBeVisible();
        expect(buttonOff).not.toBeVisible();
    });
    test("Button off", () => {
        render(<ButtonToggle text="test" isOn={false} />);
        const [buttonOn, buttonOff] = GetToggles("test");
        expect(buttonOn).not.toBeVisible();
        expect(buttonOff).toBeVisible();
    });
    test("onChange", async () => {
        let testBoolean = false;
        const user = userEvent.setup();
        render(<ButtonToggle text="test" isOn={testBoolean} onChange={() => testBoolean = !testBoolean} />);
        const [buttonOn, buttonOff] = GetToggles("test");
        expect(buttonOn).not.toBeVisible();
        expect(buttonOff).toBeVisible();
        await user.click(buttonOff);
        expect(testBoolean).toBeTruthy();
        await user.click(buttonOn);
        expect(testBoolean).toBeFalsy();
    });
});
