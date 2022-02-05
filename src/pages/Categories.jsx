import { Input, Grid, Menu } from "semantic-ui-react";

const Categories = () => {
  return (
    <div style={{ margin: "10px" }}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <div className="ui vertical menu">
              <h3 style={{ textAlign: "center" }}>Trending Heading</h3>
              <div className="item">Ready Materials</div>
              <div className="item">Smart Lights</div>
            </div>
            {/* <Menu
              // size="large"
              vertical
              style={{ textAlign: "center" }}
            >
              <Menu.Header as="h3" style={{ textAlign: "center" }}>
                Trending Products
              </Menu.Header>
              <Menu.Item>Ready Materials</Menu.Item>
              <Menu.Item>Smart Lights</Menu.Item>
            </Menu> */}
          </Grid.Column>
          <Grid.Column
            width={12}
            // style={{ marginLeft: "90px" }}
          >
            <Input icon="search" placeholder="Search" fluid />
            {/* nostrum dolores, quia molestiae. Tempora. */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Categories;
