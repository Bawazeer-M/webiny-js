import React from "react";
import _ from "lodash";
import { createComponent } from "webiny-app";

class PageListControls extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const {
            modules: { Dropdown, Checkbox, Grid, OptionsData },
            category,
            onCategory
        } = this.props;

        return (
            <Grid.Row>
                <Grid.Col all={3}>
                    <OptionsData entity={"CmsCategory"} fields={"id title"} labelField={"title"}>
                        {({ options }) => (
                            <Dropdown title={_.get(category, "title", "All")} type={"balloon"}>
                                <Dropdown.Header title="Categories" />
                                <Dropdown.Link
                                    key={"all"}
                                    onClick={() => onCategory(null)}
                                    title={"All"}
                                />
                                {options.map(opt => (
                                    <Dropdown.Link
                                        key={opt.data.id}
                                        onClick={() => onCategory(opt.data)}
                                        title={opt.label}
                                    />
                                ))}
                            </Dropdown>
                        )}
                    </OptionsData>
                </Grid.Col>
                <Grid.Col all={3}>
                    <Dropdown title="Sort by" type={"balloon"}>
                        <Dropdown.Header title="Sort by" />
                        <Dropdown.Link onClick={() => {}} title="Insert" />
                        <Dropdown.Link onClick={() => {}} title="Update" />
                        <Dropdown.Link onClick={() => {}} title="Insert" />
                    </Dropdown>
                </Grid.Col>
                <Grid.Col all={3}>
                    <Dropdown title="Actions" type={"balloon"}>
                        <Dropdown.Header title="Actions" />
                        <Dropdown.Link onClick={() => {}} title="Insert" />
                        <Dropdown.Link onClick={() => {}} title="Update" />
                        <Dropdown.Link onClick={() => {}} title="Insert" />
                    </Dropdown>
                </Grid.Col>
                <Grid.Col all={1} xsPush={1}>
                    <Checkbox onChange={() => {}} value={false} style={{ marginTop: 7 }} />
                </Grid.Col>
            </Grid.Row>
        );
    }
}

export default createComponent(PageListControls, {
    modules: ["Dropdown", "Checkbox", "Grid", "OptionsData"]
});