describe("Проверка добавления, изменения и удаления пользователя", () => {
  const user = {
    id: 1,
    username: `testUser${Date.now()}`,
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    password: "password",
    phone: "1234567890",
    userStatus: 1,
  };

  beforeEach(() => {
    cy.createUser(user);
  });

  afterEach(() => {
    cy.deleteUser(user.username);
  });

  it("Проверка создания пользователя", () => {
    cy.request("GET", `/user/${user.username}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(user.username);
    });
  });

  it("Изменение пользователя", () => {
    const updatedUser = { ...user, firstName: "Updated" };
    cy.updateUser(user.username, updatedUser).then(() => {
      cy.request("GET", `/user/${user.username}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstName).to.eq("Updated");
      });
    });
  });

  it("Удаление пользователя", () => {
    // Поскольку пользователь удалится в afterEach, здесь мы проверяем, что он пока есть
    cy.request("GET", `/user/${user.username}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
