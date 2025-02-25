﻿using System;
using System.Collections.Generic;

namespace WS0._1Venta.Models;

public partial class Producto
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string PrecioUnitario { get; set; } = null!;

    public string Costo { get; set; } = null!;
}
