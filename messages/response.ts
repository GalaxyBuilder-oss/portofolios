export const responseMsg = {
  OK: {
    message: "Yeay! Berhasil dapetin data",
    data: null as any,
    success: true,
  },
  INTERNAL_ERROR: {
    message: "Ups! ada yang error",
    data: null as any,
    success: false,
  },
  BAD_REQUEST: {
    message: "Ups! kesalahan user",
    data: null as any,
    success: false,
  },
  UNAUTHORIZED: {
    message: "Ups! kamu belum login",
    data: null as any,
    success: false,
  },
};
