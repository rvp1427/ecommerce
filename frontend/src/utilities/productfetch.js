export async function latestProd() {
  try {
    const prod = await fetch("http://localhost:4000/api/product/latest");
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export async function bestsellerProd() {
  try {
    const prod = await fetch("http://localhost:4000/api/product/bestseller");
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export async function collections() {
  try {
    const prod = await fetch("http://localhost:4000/api/product");
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export async function getProduct(id) {
  try {
    const prod = await fetch(`http://localhost:4000/api/product/${id}`);
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export async function updateUser(id, userData) {
  try {
    const prod = await fetch(`http://127.0.0.1:4000/api/user/${id}`, {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export async function createOrder(id, cart) {
  try {
    // console.log(cart);
    const prod = await fetch(`http://127.0.0.1:4000/api/order/${id}`, {
      method: "post",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export async function login(dataObj, type) {
  try {
    console.log(dataObj, type);
    const prod = await fetch(`http://127.0.0.1:4000/api/user/${type}`, {
      method: "post",
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(prod.headers.get("Set-Cookie"));
    const data = await prod.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export function cartSubTotal(cart) {
  const subtotal =
    cart.length > 0
      ? cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
      : 0;

  return subtotal;
}

export function addCookie(name, value, exday) {
  const time = new Date();
  // console.log(time.toLocaleString());
  time.setTime(time.getTime() + exday * 24 * 60 * 60 * 1000);
  // console.log(time.toUTCString());
  const exp = "expires=" + time.toUTCString();
  // console.log(name + "=" + value + ";" + exp + ";");
  document.cookie = name + "=" + value + ";" + exp + ";";
}
