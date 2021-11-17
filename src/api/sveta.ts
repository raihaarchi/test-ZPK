import axiosBase, { CancelToken } from 'axios';
import { Cart } from 'types/cart';
import { CatalogFilters } from 'types/catalogFilters';
import { FilterCategory } from 'types/filterCategory';
import { Good } from 'types/good';
import { GoodInCart } from 'types/goodInCart';
import { Pagination } from 'types/pagination';
import { Shop } from 'types/shop';
import { Order, SelectOptionFromApi } from 'types/order';
import { Shipment } from 'types/shipment';
import { typeProducts } from 'types/order-shipment';
import { typeFiltering, typeFilteringNormilized } from 'types/filtering';
import User from 'types/user';

export const axios = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_SVETA_API_URL,
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_SVETA_API_TOKEN,
  },
});

export const fetchMe = async (): Promise<User> => {
  return (await axios.get<User>('Users/WhoAmI')).data;
};

export const fetchShipment = async <T>(
  extra: string | string[] = '',
): Promise<T> => (await axios.get(`Shipments/${extra}`)).data;

export const fetchShipmentsItem = async (id: number): Promise<Shipment> =>
  (await axios.get(`Shipments/${id}`)).data;

export const fetchOrdersItem = async (id: number): Promise<Order> =>
  (await axios.get(`Orders/${id}`)).data;

export const fetchOrder = async (extra = '') =>
  (await axios.get('orders/' + extra)).data;

export const fetchProducts = async <T>({
  id,
  filtering,
  sorting,
  page,
  puth,
}: {
  id: number;
  filtering: { filter?: string };
  sorting: string;
  page: number;
  puth: string;
}): Promise<T> =>
  (
    await axios.get(`/${puth}/${id}/Items`, {
      params: {
        ...filtering,
        sort: sorting,
        limit: process.env.NEXT_PUBLIC_SVETA_API_LIMIT_PRODUCTS,
        page,
      },
    })
  ).data;

export const fetchChangeProduct = async ({
  id,
  itemId,
  request,
  puth,
}: {
  id: number;
  itemId: number;
  request: { quantity: number };
  puth: string;
}) =>
  await axios.put(`/${puth}/${id}/Items/${itemId}`, {
    ...request,
  });

export const fetchRemoveProduct = async ({
  id,
  itemId,
  puth,
}: {
  id: number;
  itemId: number;
  puth: string;
}) => await axios.delete(`/${puth}/${id}/Items/${itemId}`);

export const fetchAddProduct = async ({
  id,
  puth,
  request,
}: {
  id: number;
  puth: string;
  request: { goodId?: number | string; quantity: number };
}): Promise<typeProducts> =>
  (
    await axios.post(`/${puth}/${id}/Items`, {
      ...request,
    })
  ).data;

export const downloadFile = (
  url?: string,
  fileName?: string,
  fileExtension?: string,
) =>
  axios({
    url: url,
    responseType: 'blob',
  })
    .then((response) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.setAttribute('download', `${fileName}.${fileExtension}`);
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => error);

export const fetchFilterCategories = async ({
  shop,
}: {
  shop: Shop;
}): Promise<FilterCategory[]> => {
  return (await axios.get(`Showcase/CategoriesTree/0/ForDepartment/${shop.id}`))
    .data;
};

export const fetchShops = async (): Promise<Shop[]> => {
  return (await axios.get<Shop[]>('Departments/Shop?limit=1000')).data;
};

const returnFiltration = (
  filtering: typeFiltering,
): typeFilteringNormilized => {
  const { date = {}, ...filterByOther } = filtering;
  return { ...filterByOther, ...date };
};

export const fetchOrders = async ({
  sorting: sort,
  filtering,
  page,
}: {
  sorting: string;
  filtering: typeFiltering;
  page: number;
}): Promise<{
  data: Order[];
  pagination: Pagination;
}> => {
  const filter = returnFiltration(filtering);

  return (
    await axios.get(`Orders`, {
      params: {
        sort,
        page,
        limit: process.env.NEXT_PUBLIC_SVETA_API_LIMIT,
        ...filter,
      },
    })
  ).data;
};

export const fetchContragentsSelect = async (): Promise<{
  data: SelectOptionFromApi[];
  pagination: Pagination;
}> => {
  return (await axios.get('/Contragents/ListByMovementSupplier')).data;
};

export const fetchStatusSelectOrders = async (): Promise<
  SelectOptionFromApi[]
> => {
  return (await axios.get('/Orders/UniqMovementStatus')).data;
};

export const fetchRefuseOrder = async (): Promise<SelectOptionFromApi[]> => {
  return (await axios.get('/Orders/UniqMovementStatus')).data;
};
export const fetchOrdersFile = async ({
  sorting: sort,
  filtering,
}: {
  sorting: string;
  filtering: typeFiltering;
}): Promise<Blob> => {
  const filter = returnFiltration(filtering);

  return (
    await axios.get(`Orders/ExcelOrders`, {
      params: {
        sort,
        limit: process.env.NEXT_PUBLIC_SVETA_API_LIMIT,
        ...filter,
      },
      responseType: 'blob',
    })
  ).data;
};

export const fetchShipments = async ({
  sorting: sort,
  filtering,
  page,
}: {
  sorting: string;
  filtering: typeFiltering;
  page: number;
}): Promise<{
  data: Shipment[];
  pagination: Pagination;
}> => {
  const filter = returnFiltration(filtering);

  return (
    await axios.get(`Shipments`, {
      params: {
        page,
        sort,
        limit: process.env.NEXT_PUBLIC_SVETA_API_LIMIT,
        ...filter,
      },
    })
  ).data;
};

export const fetchStatusSelectShipments = async (): Promise<
  SelectOptionFromApi[]
> => {
  return (await axios.get('/Shipments/UniqMovementStatus')).data;
};

export const fetchDepartmentsSelect = async (): Promise<{
  data: SelectOptionFromApi[];
  pagination: Pagination;
}> => {
  return (
    await axios.get('/Departments/ListByMovementWarehouse', {
      params: {
        movementType: 'shipments',
      },
    })
  ).data;
};

export const fetchRefuseShipments = async (id?: string | number) => {
  return await axios.post(`/Shipments/${id}/SupplierReject`);
};

export const fetchShipmentsFile = async ({
  sorting: sort,
  filtering,
}: {
  sorting: string;
  filtering: typeFiltering;
}): Promise<Blob> => {
  const filter = returnFiltration(filtering);

  return (
    await axios.get(`Shipments/ExcelShipments`, {
      params: {
        sort,
        limit: process.env.NEXT_PUBLIC_SVETA_API_LIMIT,
        ...filter,
      },
      responseType: 'blob',
    })
  ).data;
};

export const fetchFile = async (path: string): Promise<Blob> =>
  (
    await axios.get(`${path}`, {
      responseType: 'blob',
    })
  ).data;

export const fetchGoods = async ({
  page = 1,
  department = -1,
  category = 0,
  brands = [],
  priceFrom,
  priceTo,
  sort = 'price',
  cancelToken,
  limit = 20,
  filter,
}: {
  page: number | void;
  department: number;
  category: number;
  brands: string[];
  priceFrom?: string;
  priceTo?: string;
  sort: string;
  cancelToken?: CancelToken | undefined;
  limit?: number;
  filter?: string;
}): Promise<{
  data: Good[];
  pagination: Pagination;
}> => {
  const response = await axios.get<{
    data: Good[];
    pagination: Pagination;
  }>(`Showcase/FromCategory/${category}/ForDepartment/${department}`, {
    params: {
      page,
      limit,
      sort,
      sidebarFilterJson: {
        brands,
        price: { price_from: priceFrom, price_to: priceTo },
      },
      filter,
    },
    cancelToken,
  });

  return response.data;
};

export const fetchCatalogFilters = async (
  department = -1,
  category = 0,
): Promise<CatalogFilters> => {
  const data = (
    await axios.get(
      `CatalogFilters/Category/${category}/Department/${department}`,
    )
  ).data;

  const dataBrands = data.find((el: { key: string }) => el.key === 'brands');
  const dataPrice = data.find((el: { key: string }) => el.key === 'price');

  return {
    brands: dataBrands
      ? dataBrands.fieldGroup.map(
          (el: { key: string; templateOptions: { label: string } }) => {
            return { id: +el.key, name: el.templateOptions.label };
          },
        )
      : [],
    price: dataPrice
      ? {
          priceFrom: dataPrice.fieldGroup[0].templateOptions.priceCount,
          priceTo: dataPrice.fieldGroup[1].templateOptions.priceCount,
        }
      : { priceFrom: 0, priceTo: 1000 },
  };
};

export const fetchGood = async (
  goodId: string,
  departmentId: string,
): Promise<Good> => {
  const response = await axios.get<Good>(
    `/Showcase/Good/${goodId}/ForDepartment/${departmentId}`,
  );

  return response.data;
};

export const fetchCart = async ({
  shop,
  uuid,
  cancelToken,
}: {
  shop: Shop;
  uuid: string;
  cancelToken?: CancelToken | undefined;
}): Promise<Cart> => {
  const response = await axios.get<Cart>(
    `Orders/Draft?departmentId=${shop.id}`,
    {
      headers: {
        'anonymous-uuid': uuid,
      },
      cancelToken,
    },
  );

  return response.data;
};

export const fetchGoodsInCart = async ({
  cart,
  uuid,
  cancelToken,
}: {
  cart: Cart;
  uuid: string;
  cancelToken?: CancelToken | undefined;
}): Promise<{
  data: GoodInCart[];
  pagination: Pagination;
}> => {
  const response = await axios.get<{
    data: GoodInCart[];
    pagination: Pagination;
  }>(`Orders/${cart.id}/Items/?limit=99999`, {
    headers: {
      'anonymous-uuid': uuid,
    },
    cancelToken,
  });

  return response.data;
};

type FetchAddToCartProps = {
  cart: Cart;
  id: number; // GoodInCart.good.id или Good.id
  quantity: number;
  uuid: string;
  isNew: boolean;
  cancelToken?: CancelToken | undefined;
};

export const fetchAddToCart = async ({
  cart,
  id,
  quantity,
  uuid,
  isNew,
  cancelToken,
}: FetchAddToCartProps): Promise<void> => {
  isNew
    ? await axios.post(
        `Orders/${cart.id}/Items`,
        {
          goodId: id,
          quantity,
        },
        {
          headers: {
            'anonymous-uuid': uuid,
          },
          cancelToken,
        },
      )
    : await axios.put(
        `Orders/${cart.id}/Items/${id}`,
        {
          quantity,
        },
        {
          headers: {
            'anonymous-uuid': uuid,
          },
          cancelToken,
        },
      );
};

type FetchRemoveFromCartProps = {
  cart: Cart;
  goodInCart: GoodInCart;
  quantity?: number;
  uuid: string;
  cancelToken?: CancelToken | undefined;
};

export const fetchRemoveFromCart = async ({
  cart,
  goodInCart,
  quantity = 0,
  uuid,
  cancelToken,
}: FetchRemoveFromCartProps): Promise<void> => {
  quantity === 0
    ? await axios.delete(`Orders/${cart.id}/Items/${goodInCart.id}`, {
        headers: {
          'anonymous-uuid': uuid,
        },
        cancelToken,
      })
    : await axios.put(
        `Orders/${cart.id}/Items/${goodInCart.id}`,
        {
          quantity,
        },
        {
          headers: {
            'anonymous-uuid': uuid,
          },
          cancelToken,
        },
      );
};

export const fetchFileUploadAttachment = async ({
  id,
  file,
}: {
  id: number;
  file: FormData;
}) => {
  return (
    await axios.post(`Shipments/${id}/Attachment`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  ).data;
};

export const fetchFileAttachment = async (id: number) =>
  (await axios.get(`Shipments/${id}/GetAttachmentInfo?limit=9999`)).data;

export const fetchRemoveFileAttachment = async ({
  id,
  request,
}: {
  id: number;
  request: { attachmentId: number };
}) => {
  return (
    await axios.delete(`/Shipments/${id}/Attachment`, {
      data: { ...request },
    })
  ).data;
};
