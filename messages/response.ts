export const responseMsg = {
  OK: {
    code: 200,
    message: "Yeay! Berhasil dapetin data",
    data: null as any,
    success: true,
  },
  INTERNAL_ERROR: {
    code: 500,
    message: "Ups! ada yang error",
    data: null as any,
    success: false,
  },
  BAD_REQUEST: {
    code: 400,
    message: "Ups! kesalahan user",
    data: null as any,
    success: false,
  },
};
