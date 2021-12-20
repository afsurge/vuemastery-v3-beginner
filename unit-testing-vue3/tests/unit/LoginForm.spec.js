import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
    it("emits an event with a user data payload", () => {
        const wrapper = mount(LoginForm);

        // 1. Find text input
        const input = wrapper.find("input[type='text']");

        //// new way to id elems. for tests only - w/o using elem. id/class, etc.
        // in template: <input data-testid="name-input" type="text" v-model="name" />
        // here code above: const input = wrapper.find("[data-testid='name-input']");

        // 2. Set value for text input
        input.setValue("Abrar Faisal");

        // 3. Simulate form submission
        wrapper.trigger("submit"); // helps decouple test from comps. implementation details

        // 4. Assert event has been emitted
        const formSubmittedCalls = wrapper.emitted("formSubmitted");
        expect(formSubmittedCalls).toHaveLength(1);

        // 5. Assert payload is correct
        const expectedPayload = { name: "Abrar Faisal" };
        expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
            expectedPayload
        );
    });
});
