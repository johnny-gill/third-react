import { fireEvent, render } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("체크박스 테스트", () => {
  test("- toggle1", () => {
    const { getByLabelText } = render(<CheckBox />);
    const checkbox = getByLabelText(/not checked/i);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });

  test("- toggle2", () => {
    const { getByTestId } = render(<CheckBox />);
    const checkbox = getByTestId("chcheckbox");
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
})

