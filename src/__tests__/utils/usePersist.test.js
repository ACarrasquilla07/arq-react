import React from "react";
import {usePersistedContext, usePersistedReducer} from '../../utils/usePersist';

beforeAll(() => jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect))

it("usePersist #usePersistedContext", () => {
    const conext = {data: ""};
    const pc = usePersistedContext(conext);
    expect(conext).toEqual(pc);
})

/*
it("usePersist #usePersistedReducer", () => {
    const state = {};
    const dispatch = jest.fn();
    const pr = usePersistedReducer([state, dispatch]);
});
*/


afterAll(() => React.useEffect.mockRestore());