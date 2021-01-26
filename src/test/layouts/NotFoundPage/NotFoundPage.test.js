import React from "react";
import {Route} from "react-router-dom";
import {renderWithProviders} from "../../utils/testUtils";
import {NotFoundPage} from "../../../layouts/NotFoundPage/NotFoundPage";
import {GO_BACK_TO_HOME, PAGE_NOT_FOUND} from "../../../layouts/NotFoundPage/constants";
import userEvent from "@testing-library/user-event";


describe('not found page', () => {
    it('render not found page', () => {
        const {getByText, getAllByText} = renderWithProviders(
            <Route path='/notFound'>
                <NotFoundPage/>
            </Route>,
            {
                route: "/notFound"
            }
        );

        expect(getAllByText('netflix').length).toBe(2)
        expect(getByText(PAGE_NOT_FOUND)).toBeInTheDocument()
        expect(getByText(GO_BACK_TO_HOME)).toBeInTheDocument()
    })

    it('click on Back To Home Button', () => {
        const {queryByText, queryAllByText} = renderWithProviders(
            <Route path='/notFound'>
                <NotFoundPage/>
            </Route>,
            {
                route: "/notFound"
            }
        );

        expect(queryAllByText('netflix').length).toBe(2)
        expect(queryByText(PAGE_NOT_FOUND)).toBeInTheDocument()
        expect(queryByText(GO_BACK_TO_HOME)).toBeInTheDocument()

        userEvent.click(queryByText(GO_BACK_TO_HOME))

        expect(queryAllByText('netflix').length).toBe(0)
        expect(queryByText(PAGE_NOT_FOUND)).toBeNull()
        expect(queryByText(GO_BACK_TO_HOME)).toBeNull()
    })
})