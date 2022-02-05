import { Grid, Menu } from "semantic-ui-react";

const Categories = () => {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={3}>
          <Menu vertical borderless>
            <Menu.Header>Trending Products</Menu.Header>
            <Menu.Item>name</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          nostrum dolores, quia molestiae. Tempora.
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Categories;
